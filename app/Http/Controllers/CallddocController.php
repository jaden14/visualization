<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CallddocController extends Controller
{
    public function index(Request $request)
    {

    	$casetrend = DB::connection('opd')->table('visits')
            		->select(DB::raw("YEAR(created_at) year, MONTH(created_at) month, count(*) tvisists"))
            		->groupBy(DB::raw("year, month"))
            		->get();



        return inertia('callddoc/index', [
        				"casetrend" => $casetrend]);     
    }
}
