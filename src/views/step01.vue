<template>
  <div class="page1">
    <h3>申报年度 <span>2020</span></h3>
    <div>
      <el-form label-width="300px" :model="formLabelAlign">
        <el-form-item label="单位" style="">
          <el-input v-model="formLabelAlign.unitId"></el-input>
        </el-form-item>
        <el-form-item label="报送职改办">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="个人身份性质">
          <el-input v-model="formLabelAlign.property"></el-input>
        </el-form-item>
        <el-form-item label="拟定专业技术资格名称">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item label="拟定专业名称">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "step01",
  data() {
    return {
      formLabelAlign: {
        unitId: "",
        region: "",
        property: "",
        type: ""
      },
      methods: {
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    };
  }
};
</script>
<style>
.page1 {
  padding: 10px;
}
.page1 h3 {
  color: #040404;
  padding: 2px 0 2px 20px;
  background-color: rgb(186, 186, 236);
  border-radius: 4px;
}
.page1 form {
  display: table;
  width: 100%;
  margin-top: 30px;
}
.page1 form div {
  font-size: 17px;
  font-weight: 900;
}
.page1 form input {
  /* margin: 20px 0 30px 0; */
  width: 40%;
  /* padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid #111;
  outline-color: #d1dbe5; */
}

.el-form-item {
  margin-left: 15%;
}

.page1 h3 span {
  color: #fff;
  font-size: 20px;
  font-weight: 800;
}
.left_input,
.right_input {
  position: relative;
  display: table-cell;
  width: 50%;
}
.right_input .btn {
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  background-color: rgb(186, 186, 236);
  color: #fff;
  width: 70px;
  border: 1px solid #ccc;
  text-align: center;
}

.left_input .con {
  margin-left: 50px;
}
</style>
