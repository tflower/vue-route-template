<template>
  <el-container>
    <el-header class='header'>
      
    </el-header>
    <el-main>
      <router-view class="view"></router-view>
   </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'index',
  data () {
    return {
     
    }
  },
  computed: {
    ...mapGetters([
        'newrouter'
    ])
  },
  methods: {
    logout(){
    	this.$store.dispatch('Logout').then(() => {
            this.$router.push({ path: '/login' });
        }).catch(err => {
            this.$message.error(err);
        });
    }
  },
  mounted(){
  console.log(this.$router)
  }
}
</script>

<style scoped>
.header{
	padding: 0px;
}
.nav_box{
	border-bottom: 0px;
  width:250px;
  height:250px;
  float:left;
}
.logout_box{
	background-color: #545c64;
	line-height: 60px;
    width: 100%;
    color:#fff;
}
.view{
  margin-top:200px;
}
</style>