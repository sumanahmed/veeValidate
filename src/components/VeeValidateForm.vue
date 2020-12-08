<template>
    <div>
        <b-row>
            <b-col>
                <h2 class="text-center mb-2">VeeValidate Form</h2>
                <ValidationObserver v-slot="{ handleSubmit, reset }" ref="addForm">
                    <form @submit.prevent="handleSubmit(onSubmit)" class="col-sm-6 offset-sm-3" autocomplete="off"  @reset.prevent="reset">

                        <ValidationProvider name="name" rules="required|alpha" v-slot="{errors}" class="mt-5">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" v-model="formData.name" class="form-control" />
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider name="roll" rules="required" v-slot="{errors}">
                            <div class="form-group">
                                <label>Roll</label>
                                <input type="text" v-model="formData.roll" class="form-control" />
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider name="mobile" rules="required" v-slot="{errors}">
                            <div class="form-group">
                                <label>Mobile</label>
                                <input type="text" v-model="formData.mobile" class="form-control" />
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider name="email" rules="required|email" v-slot="{errors}">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" v-model="formData.email" class="form-control" />
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <input type="submit" value="Submit" class="btn btn-primary" style="margin-right:10px;"/>
                        <input type="reset" value="Reset" class="btn btn-warning"/>
                    </form>
                </ValidationObserver>
            </b-col>
            <b-col>
                <b-table striped hover :items="students"></b-table>
            </b-col>
        </b-row>        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            formData : {
                name: '',
                roll: '',
                mobile: '',
                email: '',
            },
            students:[],
        }
    },
    mounted() {
        this.getStudents();
    },
    methods: {
        async onSubmit() {
            await axios.post('http://localhost:8000/api/students', this.formData)
            .then( response => {
                if(response.status === 201){
                    this.students.push(response.data);              
                    this.$nextTick(() => this.$refs.addForm.reset());    
                    this.$toast.success('Student Created Successfully');  
                } else {
                    this.$toast.error('Sorry, something went wrong');
                }                
            })
            .catch( error => {                              
                if (error.response.status === 422) {
                    this.$refs.addForm.setErrors(error.response.data.errors);
                }                
            });
        },
        async getStudents(){
            await axios.get('http://localhost:8000/api/students')
            .then( response => {
                this.students = response.data;
            })
            .catch( error => {
                console.log(error);
            });
        }
    }
}
</script>

<style>

</style>