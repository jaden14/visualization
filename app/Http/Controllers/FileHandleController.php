<?php

namespace App\Http\Controllers;

use App\Models\TemporaryFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;

class FileHandleController extends Controller
{
    public function __construct(TemporaryFile $tempFile)
    {
        $this->tempFile = $tempFile;
    }

    public function uploadAvatar(Request $request)
    {
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $filename = $file->getClientOriginalName();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('avatars/tmp/' . $folder, $filename);

            $this->tempFile->create([
                'folder' => $folder,
                'filename' => $filename,
            ]);

            return $folder;
        }

        return '';
    }

    public function destroyAvatar(Request $request)
    {
        $dir = $request->getContent();
        
        Storage::disk('local')->deleteDirectory('/avatars/tmp/' . $dir);

        $temporaryFile = $this->tempFile->where('folder', $dir)->first();
        $temporaryFile->delete();

        return "removed";
    }

    public function get_personnel(){
        
        $data=[];
        //192.168.9.101:91/api/EmployeesAttendance?empl_id='+this.empl_id+'&year='+yr+'&month='+mo
        //192.168.9.101:91/api/ListOfEmployees
        $response = Http::post('192.168.9.101:91/api/ListOfEmployees');
        $data=$response;
        dd("response: ".$data);
        //$data->toJson();
        return $data;
    }

}
