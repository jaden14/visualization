<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CallddocController extends Controller
{
    public function index(Request $request)
    {
    	//casetrend
    	$casetrend = DB::connection('opd')->table('visits')
    				->leftJoin('hospitals', 'hospitals.id','=','visits.hospital_id')
            		->select(DB::raw("CONCAT(YEAR(visits.created_at),'-',MONTH(visits.created_at)) month, count(visits.id) tvisists, hospitals.hospitalname"))
            		->groupBy(DB::raw("year(visits.created_at),month(visits.created_at)"))
            		->get();

        //CASES TOTAL
        $count = DB::connection('opd')->table('visits as v')
        			->leftJoin('patients as p', 'p.id', '=', 'v.patient_id')
        			->leftJoin('hospitals as h', 'h.id', '=', 'v.hospital_id')
        			->select(DB::raw("h.hospitalname, count(*) as total_count"))
        			->groupBy('h.hospitalname');
       	$cases_total = DB::connection('opd')->table('visits as v')
       				->select(DB::raw("'TOTAL' as hospitalname, count(*) as total_count"))
       				->unionAll($count)
       				->orderBy('hospitalname', 'asc')
       				->get();


       	$counted = DB::connection('opd')->table('hospitals as h')
       				->select(DB::raw('h.hospitalname, count(*) as total_client'))
        			->join(DB::raw('(select  visits.hospital_id, visits.patient_id, count(*) as total_client from visits  group by visits.patient_id)  hh'),
        				function($join)
        			{
           				$join->on('h.id', '=', 'hh.hospital_id');
        			})->groupBy('h.hospitalname');

        $clients = DB::connection('opd')->table('hospitals as h')
       				->select(DB::raw('"TOTAL" as hospitalname, count(*) as total_client'))
        			->join(DB::raw('(select  visits.hospital_id, visits.patient_id, count(*) as total_client from visits  group by visits.patient_id)  hh'),
        				function($join)
        			{
           				$join->on('h.id', '=', 'hh.hospital_id');
        			})->unionAll($counted)
        			->orderBy('hospitalname','asc')
        			->get();
        //AVERAGE
        $average = DB::connection('opd')->table('visits')
    				->leftJoin('hospitals', 'hospitals.id','=','visits.hospital_id')
            		->select(DB::raw("hospitals.hospitalname, AVG(rating) as rating"))
            		->where('rating','>',0)
            		->groupBy(DB::raw("hospital_id"))
            		->orderBy('hospitalname','asc')
            		->get();

        //FIRST TIME CLIENT
        $first_time = DB::connection('opd')->table('hospitals as h')
       				->select(DB::raw('h.hospitalname, count(*) as total_first'))
        			->join(DB::raw('(select  visits.hospital_id, visits.patient_id, count(*) as total_first from visits  group by visits.patient_id)  hh'),
        				function($join)
        			{
           				$join->on('h.id', '=', 'hh.hospital_id');
        			})
        			->where('total_first', 1)
        			->groupBy('h.hospitalname');

        $total_first = DB::connection('opd')->table('hospitals as h')
       				->select(DB::raw('"TOTAL" as hospitalname, count(*) as total_first'))
        			->join(DB::raw('(select  visits.hospital_id, visits.patient_id, count(*) as total_first from visits  group by visits.patient_id)  hh'),
        				function($join)
        			{
           				$join->on('h.id', '=', 'hh.hospital_id');
        			})->unionAll($first_time)
        			->where('total_first', 1)
        			->orderBy('hospitalname','asc')
        			->get();

        //REPEAT CLIENT
        $repeat_time = DB::connection('opd')->table('hospitals as h')
       				->select(DB::raw('h.hospitalname, count(*) as repeat_time'))
        			->join(DB::raw('(select  visits.hospital_id, visits.patient_id, count(*) as repeat_time from visits  group by visits.patient_id)  hh'),
        				function($join)
        			{
           				$join->on('h.id', '=', 'hh.hospital_id');
        			})
        			->where('repeat_time','>',1)
        			->groupBy('h.hospitalname');

        $total_repeat = DB::connection('opd')->table('hospitals as h')
       				->select(DB::raw('"TOTAL" as hospitalname, count(*) as repeat_time'))
        			->join(DB::raw('(select  visits.hospital_id, visits.patient_id, count(*) as repeat_time from visits  group by visits.patient_id)  hh'),
        				function($join)
        			{
           				$join->on('h.id', '=', 'hh.hospital_id');
        			})->unionAll($repeat_time)
        			->where('repeat_time','>',1)
        			->orderBy('hospitalname','asc')
        			->get();

        //SERVED CASES BY HOSPITAL
        $served = DB::connection('opd')->table('visits')
    				->leftJoin('hospitals', 'hospitals.id','=','visits.hospital_id')
            		->select(DB::raw("hospitals.hospitalname, count(*) as total, CAST(count(*)* 100/ (select count(*) from visits where visits.`status` ='Served') as DECIMAL(5,2)) as percentage"))
            		->groupBy('hospitalname')
            		->get();

        //SERVED CASES BY PROVINCE
        $served_per_province = DB::connection('opd')->table('visits')
    				->leftJoin('patients', 'patients.id','=','visits.patient_id')
    				->leftJoin('provinces', 'provinces.id','=','patients.province_id')
            		->select(DB::raw("provinces.provincename, count(*) as total, cast(count(*)* 100/ (select count(*) from visits where visits.`status` ='Served')  as DECIMAL(5,2)) as percentage"))
            		->where(DB::raw('visits.status'),'Served')
            		->groupBy('provincename')
            		->get();

        //fIRST TIME AND REPEAT CLIENT

        $first = DB::connection('opd')->table('hospitals as h')
       				->select(DB::raw('"First Time Client" as client, count(*) as total,  CAST(count(*)* 100/ (select count(DISTINCT patient_id) from visits ) as DECIMAL(5,2)) as percentage'))
        			->join(DB::raw('(select  visits.hospital_id, visits.patient_id, count(*) as total_first from visits  group by visits.patient_id)  hh'),
        				function($join)
        			{
           				$join->on('h.id', '=', 'hh.hospital_id');
        			})
        			->where('total_first', 1);

       	$repeat = DB::connection('opd')->table('hospitals as h')
       				->select(DB::raw('"Repeat Clients" as client, count(*) as total, CAST(count(*)* 100/ (select count(DISTINCT patient_id) from visits ) as DECIMAL(5,2)) as percentage'))
        			->join(DB::raw('(select  visits.hospital_id, visits.patient_id, count(*) as repeat_time from visits  group by visits.patient_id)  hh'),
        				function($join)
        			{
           				$join->on('h.id', '=', 'hh.hospital_id');
        			})->unionAll($first)
        			->where('repeat_time','>',1)
        			->get();


  		//BY DEPARTMENT
       	 $department = DB::connection('opd')->table('visits as v')
       				->leftJoin('doctors as d', 'd.id', '=','v.doctor_id')
        			->leftJoin('departments as dep', 'dep.id', '=','d.department_id')
        			->select(DB::raw('dep.department,count(*) as total, CAST(count(*)* 100/ (select count(*) from visits ) as DECIMAL(5,2)) as percentage'))
        			->groupBy('dep.department')
        			->get();

        return inertia('callddoc/index', [
        				"casetrend" => $casetrend,
        				"cases_total" =>$cases_total,
        				"client_total" =>$clients,
        				"average" =>$average,
        				"total_first" =>$total_first,
        				"total_repeat"=>$total_repeat,
        				"served"=>$served,
        				"served_per_province" => $served_per_province,
        				"first_repeat_client" => $repeat,
        				"department" => $department]);     
    }
}
