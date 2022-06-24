<template>
    <Head>
        <title>CalldDoc</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Personnel</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" @change="searchMe()" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer mR-10">
                    <label>Page Size:</label>&nbsp;&nbsp;
                    <select class="form-control-sm " v-model="pageSize">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div class="peer"  >
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>
        <filtering v-if="filter" @closeFilter="filter=false">
            <!--<label>Sample Inputs</label>
            <input type="text" class="form-control">-->
            <label>Offices</label>
            <select class="form-control" v-model="select_office" @change="selectOffice(select_office)">
                <option  v-for="office in offices_arr">
                    {{ office }}
                </option>
            </select>
            <label>Positions</label>
            <select class="form-control" v-model="select_pos" @change="selectPos()">
                <option  v-for="pos in positions_arr">
                    {{ pos }}
                </option>
            </select>
            
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="">Filter</button>
        </filtering>
        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th @click="sort('PersonData.employee_name')">Employee Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th @click="sort('PersonData.position_title1')">Position</th>
                            <th @click="sort('PersonData.department_proper_name')">Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="PersonData in sortedEmp">
                            <td>{{ PersonData.employee_name }}</td>
                            <td>{{ PersonData.age }}</td>
                            <td>{{ PersonData.gender }}</td>
                            <td>{{ PersonData.position_title1 }}</td>
                            <td>{{ PersonData.department_proper_name }}</td>
                            <td style="text-align: right">
                                <div class="dropdown dropstart">
                                    <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                        <li><Link class="dropdown-item" :href="`/personnel/details/${PersonData.empl_id}`">Personnel Details</Link></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <button class="btn btn-outline-primary" @click="prevPage">Previous</button> &nbsp;
                    <button class="btn btn-outline-primary" @click="nextPage">Next</button>
                </p>
                {{ ((currentPage-1)*pageSize)+1 }} to {{ getTo() }} of {{ myLength }} results
            </div>
        </div>
        
    </div>
    
</template>

<script>
import Filtering from "@/Shared/Filter";

export default {
    name: 'App',
    components: { Filtering },
    props: {
        //personnelData: Object,
    },
    data(){
        return{
            PersonnelData: [],
            currentSort:'name',
            currentSortDir:'asc',
            pageSize:10,
            currentPage:1,
            offices: [],
            offices_arr: [],
            filter: false,
            select_office: null,
            search: null,
            select_pos: null,
            filtered_by_office: [],
            positions: [],
            positions_arr: [],
            myLength: 0,
            temp_full: [],
            temp1: [],
        }
    },
    computed:{
        sortedEmp:function() {
            this.temp1 = this.PersonnelData;
            var pos=[""];
            if(this.select_office){
                this.temp1 = _.filter(this.temp1, {department_name1: this.select_office});
            }
            this.positions = _.groupBy(this.temp1, "position_long_title")
                _.forEach(this.positions, function(e) {
                    pos.push(e[0].position_title1);
                })
            
            if(this.select_pos){
                this.temp1 = _.filter(this.temp1, {position_title1: this.select_pos});
            }
            if(this.search){
                this.search = this.search.toUpperCase();
                this.temp1=_.filter(this.temp1, (item) => {
                                return item.employee_name.includes(this.search);
                            });
            }
            this.positions_arr =[];
            pos.sort();
            this.positions_arr =pos;
            this.myLength = this.temp1.length;
            
            return this.temp1.sort((a,b) => {
                        let modifier = 1;
                        if(this.currentSortDir === 'desc') modifier = -1;
                        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                        return 0;
                    }
                    ).filter((row, index) => {
                        let start = (this.currentPage-1)*this.pageSize;
                        let end = this.currentPage*this.pageSize;
                        if(index >= start && index < end) return true;
            });
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        async getData(){
            let uri='//192.168.9.101:91/api/ListOfEmployees'
            var off =[];
            var pos = [];
            off.push("");
            axios.post(uri,this.PersonnelData).then((response)=>{
                this.PersonnelData = response.data;
                this.offices = _.groupBy(response.data, "department_code")
                this.positions = _.groupBy(response.data, "position_long_title")
                _.forEach(this.offices, function(e) {
                    off.push(e[0].department_name1);
                })
                pos.push("");
                _.forEach(this.positions, function(e) {
                    pos.push(e[0].position_title1);
                })
                this.offices_arr=off;
                this.offices_arr.sort();
                this.positions_arr = pos;
                this.positions_arr.sort();
            })
            this.myLength = this.PersonnelData.length;
        },
        nextPage:function() {
            if((this.currentPage*this.pageSize) < this.myLength) this.currentPage++;
        },
        prevPage:function() {
            if(this.currentPage > 1) this.currentPage--;
        },
        showFilter() {
            this.filter = !this.filter
        },
        sort:function(s) {
            if(s === this.currentSort) {
                this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
            }
            this.currentSort = s;
        },
        selectOffice(sel_off){
            this.currentPage=1;
        },
        selectPos(){
            this.currentPage=1;
        },
        getTo(){
            var toPage= this.currentPage;
            toPage = toPage*this.pageSize;
            if(toPage>this.myLength){
                toPage = toPage -(toPage-this.myLength);
            }
            return toPage;
        },
        searchMe(){
            this.currentPage=1;
        }
    },
}
</script>