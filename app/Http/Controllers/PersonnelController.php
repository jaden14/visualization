<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PersonnelController extends Controller
{
    public function index(Request $request){
        $data=[];
        //192.168.9.101:91/api/EmployeesAttendance?empl_id='+this.empl_id+'&year='+yr+'&month='+mo
        //192.168.9.101:91/api/ListOfEmployees
        $response = Http::post('192.168.9.101:91/api/EmployeesAttendance?empl_id=8510&year=2022&month=01');
        $data=$response;
        dd("response: ".$data);
        //$data->toJson();
        return $data;
        //return ['data' => $data];
    }

    public function details($id){
        return inertia('personnel/details',['empl_id'=>$id]);
    }
}
