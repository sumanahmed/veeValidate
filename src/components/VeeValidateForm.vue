<template>
  <div>
      <h2>VeeValidate Form</h2>
      <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)" class="col-sm-6 offset-sm-3">

                <ValidationProvider name="Name" rules="required|alpha" v-slot="{errors}" class="mt-5">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="formData.name" class="form-control" />
                        <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider name="E-mail" rules="required|email" v-slot="{errors}">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" v-model="formData.email" class="form-control" />
                        <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider name="Password" rules="required|max:12|min:6" v-slot="{errors}">
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="formData.password" class="form-control" />
                        <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider name="Gender" rules="required" v-slot="{errors}">
                    <div class="form-group">
                        <label>Gender</label>                        
                        <select class="form-control" v-model="formData.gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider name="Accept Terms" rules="required" v-slot="{errors}">
                    <div class="form-check">
                        <input type="checkbox" v-model="formData.acceptTerms" class="form-check-input mr-2" /> 
                        <label class="form-check-label">Accept Terms</label>    
                    </div>                      
                    <span class="text-danger">{{ errors[0] }}</span><br/>
                </ValidationProvider>
                <input type="submit" value="Submit" class="btn btn-primary mt-3"/>
          </form>
      </ValidationObserver>
  </div>
</template>

<script>
export default {
    data() {
        return {
            formData : {
                name: '',
                email: '',
                password: '',
                gender: '',
                acceptTerms: null,
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.formData);
        }
    }
}
</script>

<style>

</style>