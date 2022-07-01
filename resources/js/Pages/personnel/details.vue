<template>
    <Head>
        <title>Personnel Details</title>
    </Head>


    <div class="row gap-20 masonry pos-r">
        <div class="masonry-item w-100">
            <div class="row gap-20">
                <div class="col-md-12">
                    <div class="layers bd bgc-white p-20">
                        <div class="peers fxw-nw jc-sb ai-c">
                            <h3>Personnel Details</h3>
                        </div>
                        <div class="masonry-item w-100">
                            <div class="row gap-20">
                                <div class="col-md-12">
                                    <table>
                                        <tr v-for="personData in PersonnelData">
                                            <div v-if="personData.empl_id === empl_id" >
                                                <div><span style="font-weight: bold">Employee Name: </span>{{ personData.employee_name}}</div>
                                                <div><span style="font-weight: bold">Department: </span>{{ personData.department_proper_name }} ({{personData.department_short_name}})</div>
                                                <div><span style="font-weight: bold">Position: </span>{{ personData.position_long_title }}</div>
                                            </div>
                                        </tr>
                                    </table>
                                    
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span style="font-weight: bold">Select month: </span><input type="month" v-model="date_select" @change="setDate(date_select)" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        
        <div class="masonry-item w-100">
            <div class="row gap-20">
                <!--Time Schedule-->
                <div class="col-md-5">
                    <div class="layers bd bgc-white p-20">
                        <div><h5>Employee Time Schedule</h5></div>
                        <div><h6>{{ monthYear() }}</h6></div>
                        <!--<div>{{ scheduleData }}</div>-->
                        <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>AM-in</th>
                                        <th>AM-out</th>
                                        <th>PM-in</th>
                                        <th>PM-out</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="schedData in scheduleData">
                                        <td>{{ schedData.dtr_date }}</td>
                                        <td>{{ schedData.tse_in_am }}</td>
                                        <td>{{ schedData.tse_out_am }}</td>
                                        <td>{{ schedData.tse_in_pm }}</td>
                                        <td>{{ schedData.tse_out_pm }}</td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>

                <!--Attendance-->
                <div class="col-md-7">
                    <div class="layers bd bgc-white p-20">
                        <div><h5>Attendance</h5></div>
                        <div><h6>{{ monthYear() }}</h6></div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>AM-in</th>
                                    <th>AM-out</th>
                                    <th>PM-in</th>
                                    <th>PM-out</th>
                                    <th>Undertime (hours)</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="attendData in attendanceData">
                                    <td>
                                        <span v-if="attendData.remarks_details==='????????'" style="color: red">{{ get1Day(attendData.dtr_date) }}</span>
                                        <span v-else>{{ get1Day(attendData.dtr_date) }}</span>
                                    </td>
                                    <td>{{ attendData.time_in_am }}</td>
                                    <td>{{ attendData.time_out_am }}</td>
                                    <td>{{ attendData.time_in_pm }}</td>
                                    <td>{{ attendData.time_out_pm }}</td>
                                    <td v-if="computeUndertime(attendData.under_Time)>0">{{ computeUndertime(attendData.under_Time) }}</td>
                                    <td v-else>---</td>
                                    <td>
                                        <span v-if="attendData.remarks_details==='????????'" style="color: red">{{ attendData.remarks_details }}</span>
                                        <span v-else>{{ attendData.remarks_details }}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--OT Request-->
                <div class="col-md-5">
                    <div class="layers bd bgc-white p-20">
                        <h5>Overtime Request</h5>
                        <div><h6>{{ monthYear() }}</h6></div>
                        <div v-if="OTData.length==0">
                            NO overtime request
                        </div>
                        <div v-else>
                            <tr v-for="OTDat in OTData">
                                <td>{{OTDat.dtr_date}}</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Filtering from "@/Shared/Filter";

export default {
    name: 'App',
    props: {
        empl_id: String,
    },
    //(new Date()).getFullYear()+"-"+(new Date()).getMonth(),
    data(){
        return{
            emp_id: "",
            date_select: "",
            attendanceData: [],
            scheduleData: [],
            PersonnelData: [],
            OTData: [],
            date_val: [],
            dayval: 0,
        }
    },
    mounted(){
        this.setCurrentDate();
    },
    
    methods:{
        setAttendance(yr, mo){
            this.emp_id=this.empl_id;
            var dts =[];
            let uri='//192.168.9.101:91/api/EmployeesAttendance?empl_id='+this.empl_id+'&year='+yr+'&month='+mo;
            axios.post(uri,this.PersonnelData).then((response)=>{
                this.attendanceData = response.data;
                this.attendanceData = _.orderBy(this.attendanceData, ['dtr_date'],['asc']); 
            })
            /*this.attendanceData.sort(function compare(a, b) {
                var dateA = new Date(a.dtr_date);
                var dateB = new Date(b.dtr_date);
                return dateA - dateB;
            });*/
        },
        get1Day(att_date){
            //alert("getDay");
            this.dayval=this.dayval+1;
            var dy =att_date;
            dy =dy.slice(1);
            dy =dy.slice(1);
            dy =dy.slice(1);
            dy =dy.slice(1);
            dy =dy.slice(1);
            dy =dy.slice(1);
            dy =dy.slice(1);
            dy =dy.slice(1);
            return dy;
        },
        setCurrentDate(){
            var cdt= new Date();
            var mon= parseFloat(cdt.getMonth())+1;
            var yr = parseFloat(cdt.getFullYear());
            var monString = mon+"";
            if(monString.length===1){
                monString=0+monString;
            }
            this.date_select=yr+"-"+monString;
            //alert(monString+"-"+yr);
            this.dayval=0;
            this.getData();
            this.getOTRequest(yr, monString);
            this.setTimeSchedule(yr, monString);
            this.setAttendance(yr, monString);
        },
        setDate(date_selected){
            //var month = date_selected.getMonth();
            var yar = this.getTheYear(date_selected);
            date_selected = date_selected.slice(1);
            date_selected = date_selected.slice(1);
            date_selected = date_selected.slice(1);
            date_selected = date_selected.slice(1);
            date_selected = date_selected.slice(1);
            var mo= date_selected;
            //alert(yar+" "+mo);
            this.getOTRequest(yar, mo);
            this.setTimeSchedule(yar, mo);
            this.setAttendance(yar, mo);
        },
        getTheYear(date_sel){
            var yar ="";
            for(let i=0; i<4; i++){
                yar=yar+date_sel.charAt(i);
            }
            return yar;
        },
        setTimeSchedule(yr, mo){
            this.emp_id=this.empl_id;
            let uri='//192.168.9.101:91/api/EmployeeTimeSchedule?empl_id='+this.empl_id+'&year='+yr+'&month='+mo;
            axios.post(uri,this.scheduleData).then((response)=>{
                this.scheduleData = response.data;
            })
        },
        getOTRequest(yr, mo){
            this.emp_id=this.empl_id;
            let uri='//192.168.9.101:91/api/EmployeeOvertimeRequest?empl_id='+this.empl_id+'&year='+yr+'&month='+mo;
            axios.post(uri,this.OTData).then((response)=>{
                this.OTData = response.data;
            })
        },
        async getData(){
            //'192.168.9.101:91/api/ListOfEmployees'
            let uri='//192.168.9.101:91/api/ListOfEmployees'
            axios.post(uri,this.PersonnelData).then((response)=>{
                //window.location.reload();
                this.PersonnelData = response.data;
            })
            /*axios.get('192.168.9.101:91/api/ListOfEmployees').then((response)=>{
                this.PersonnelData = response.data.data;
            })*/
        },
        getDay(the_date){
            /*var dt=new Date("dd/MM/yyyy").parse(the_date);*/
            var dt = new Date(the_date);
            var day = dt.getDay();
            return day;
        },
        computeUndertime(time){
            var ut = Math.round(parseFloat(time));
            ut = ut/60;
            ut= parseFloat(ut).toFixed(2);
            return ut;
        },
        monthYear(){
            var dtt = this.date_select;
            var yr ="";
            for(var i=0; i<4; i++){
                dtt = dtt.slice(1);
                yr =yr+this.date_select[i];
            }
            dtt=dtt.slice(1);
            dtt=this.montString(dtt);
            dtt = dtt+" "+yr;
            return dtt;
        },
        montString(dtt){
            var mo="";
            if(dtt==='01'){
                mo="January"
            }else if(dtt==='02'){
                mo="February"
            }else if(dtt==='03'){
                mo="March"
            }else if(dtt==='04'){
                mo="April"
            }else if(dtt==='05'){
                mo="May"
            }else if(dtt==='06'){
                mo="June"
            }else if(dtt==='07'){
                mo="July"
            }else if(dtt==='08'){
                mo="August"
            }else if(dtt==='09'){
                mo="September"
            }else if(dtt==='10'){
                mo="October"
            }else if(dtt==='11'){
                mo="November"
            }else if(dtt==='12'){
                mo="December"
            }
            return mo;
        }
    },
}
</script>