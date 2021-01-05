<template>
  <div>
    <div class="form1">
      <form action="">
        <div class="company">
          <div></div>
        </div>
        <div class="table">
          <!-- <table>
                        <tr class="company" >
                            <td colspan="5" > 
                                <span>*</span> 
                            单位（请在下拉列表中选择，如无法搜索到所需的单位信息，请先进行注册）
                            </td>

                        </tr>
                         <tr>
                            <td colspan="5" > <input type="text" placeholder="请输入单位名称关键字" style="width:94%"></td>

                        </tr>
                        <tr>
                            <td>
                                <span>*</span>
                                单位级别
                            </td>
                            <td>
                                <span>*</span>
                                个人身份性质
                            </td>
                            <td>
                                <span>*</span>
                                评审年度
                            </td>
                            <td>
                                <span>*</span>
                                姓名（现名）
                            </td>
                            <td>
                                <span>*</span>
                                姓名（曾用名）
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input v-model="formdata.ag_01.name" type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                <span>*</span>
                                性别
                            </td>
                            <td>
                                <span>*</span>
                                民族
                            </td>
                            <td>
                                <span>*</span>
                                证件号码
                            </td>
                            <td>
                                <span>*</span>
                                出生年月
                            </td>
                            <td>
                                <span>*</span>
                                填表时间
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                <span>*</span>
                                参加工作时间
                            </td>
                            <td>
                                <span>*</span>
                                专业技术工作年限
                            </td>
                            <td>
                                <span>*</span>
                                参加评审会
                            </td>
                            <td>
                                <span>*</span>
                                拟评职称系列
                            </td>
                            <td>
                                <span>*</span>
                                拟评专业
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            
                        </tr>
                        <tr>
                            <td colspan="2" class="cols">
                                <span>*</span>
                                拟评专业技术资格
                            </td>
                            
                            <td>
                               行政职务
                            </td>
                            <td>
                                
                                行政职务任命时间
                            </td>
                            <td>
                                
                                行政职务说明
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="cols">
                                <input type="text">
                            </td>
                            
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>*</span>
                                联系电话
                            </td>
                            <td>
                                <span>*</span>
                                电子邮箱
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text">
                            </td>
                            <td>
                                <input type="text">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <span>*</span>
                                档案所在地机构名称
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <input type="text" style="width:94%">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                政治面貌
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <input type="text" style="width:94%">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                
                                籍贯
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <input type="text" style="width:94%">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <span>*</span>
                                联系地址
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <input type="text" style="width:94%">
                            </td>
                        </tr>
                       
                    </table> -->
          <el-form :inline="true" label-width="100px">
            <el-card class="demo-form-inline">
              <!--  -->
              <el-form-item label="评审年度">
                <el-input placeholder="评审年度"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="单位级别">
                <el-input v-model="formdata.ag_01.unitLevel" placeholder="单位级别"></el-input>
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="formdata.ag_01.name" placeholder="姓名"></el-input>
              </el-form-item>
              <el-form-item label="曾用名">
                <el-input v-model="formdata.ag_01.oldname" placeholder="曾用名"></el-input>
              </el-form-item>
              <el-form-item label="身份证件号码">
                <el-input v-model="formdata.ag_01.idcard" placeholder="身份证件号码"></el-input>
              </el-form-item>
              <el-form-item label="民族">
                <el-input v-model="formdata.ag_01.nation" placeholder="民族"></el-input>
              </el-form-item>
              <el-form-item label="参加评审会">
                <el-input  v-model="formdata.ag_01.jury" placeholder="参加评审会"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="籍贯">
                <el-input  placeholder="籍贯"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="联系电话">
                <el-input v-model="formdata.ag_01.phone" placeholder="联系电话"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="评审专业系列">
                <el-input placeholder="评审专业系列"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="拟评专业">
                <el-input placeholder="拟评专业"></el-input>
              </el-form-item>
              <!--  -->
              <el-form-item label="政治面貌">
                <el-input v-model="formdata.ag_01.political" placeholder="政治面貌"></el-input>
              </el-form-item>
              <el-form-item label="个人身份性质">
                <el-input v-model="formdata.ag_01.property" placeholder="个人身份性质"></el-input>
              </el-form-item>
              <el-form-item label="出生年月">
                <el-date-picker
                  v-model="formdata.ag_01.birthDay"
                  placeholder="出生年月"
                  style="width:205px"
                  type="month"
                ></el-date-picker>
              </el-form-item>
              <!--  -->
              <el-form-item label="填表时间">
                <el-date-picker
                  placeholder="填表时间"
                  style="width:205px"
                ></el-date-picker>
              </el-form-item>
              <!--  -->
              <el-form-item label="参加工作时间">
                <el-date-picker
                  v-model="formdata.ag_01.workTime"
                  placeholder="参加工作时间"
                  style="width:205px"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="工作年限">
                <el-input v-model="formdata.ag_01.skillAge" placeholder="工作年限"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="formdata.ag_01.email" placeholder="邮箱"></el-input>
              </el-form-item>
              <el-form-item label="档案所在机构">
                <el-input v-model="formdata.ag_01.filePlace" placeholder="档案所在机构"></el-input>
              </el-form-item>
              <el-form-item label="行政职务">
                <el-input v-model="formdata.ag_01.position" placeholder="行政职务"></el-input>
              </el-form-item>
              <el-form-item label="职务任命时间">
                <el-date-picker
                  v-model="formdata.ag_01.posTime"
                  placeholder="行政职务任命时间"
                  style="width:205px"
                ></el-date-picker>
              </el-form-item>
              <!--  -->
              <el-form-item label="联系地址">
                <el-input placeholder="联系地址"></el-input>
              </el-form-item>
              <!--  -->
            </el-card>
          </el-form>
        </div>
        <div class="npg">
          <ul>
            <li style="margin-left: 200px;">
              <h4>
                <span>*</span>
                身份证正面图片（限1张）
                <el-upload
                  action="#"
                  list-type="picture-card"
                  :auto-upload="false"
                  style="margin-top: 38px;margin-left: 50px;">
                  <i slot="default" class="el-icon-plus"></i>
                  <div slot="file" slot-scope="{ file }">
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="formdata.ag_01.frontUrl"
                      alt=""/>
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)">
                        <i class="el-icon-zoom-in"></i>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)">
                        <i class="el-icon-download"></i>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                      </span>
                    </span>
                  </div>
                </el-upload>
              </h4>
            </li>
            <li>
              <h4>
                <span>*</span>
                身份证反面图片（限1张）
                <el-upload
                  action="#"
                  list-type="picture-card"
                  :auto-upload="false"
                  style="margin-top: 38px;margin-left: 50px;">
                  <i slot="default" class="el-icon-plus"></i>
                  <div slot="file" slot-scope="{ file }">
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="formdata.ag_01.reverseUrl"
                      alt=""/>
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)">
                        <i class="el-icon-zoom-in"></i>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)">
                        <i class="el-icon-download"></i>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                      </span>
                    </span>
                  </div>
                </el-upload>
              </h4>
            </li>
            <li>
              <h4>
                <span>*</span>
                近期免冠2寸照片（限1张）
                <el-upload
                  action="#"
                  list-type="picture-card"
                  :auto-upload="false"
                  style="margin-top: 38px;margin-left: 50px;">
                  <i slot="default" class="el-icon-plus"></i>
                  <div slot="file" slot-scope="{ file }">
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""/>
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)">
                        <i class="el-icon-zoom-in"></i>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)">
                        <i class="el-icon-download"></i>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                      </span>
                    </span>
                  </div>
                </el-upload>
              </h4>
            </li>
          </ul>
        </div>
        <div @click="test" class="btn">保存</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ag_step01",
  props: {
    formdata: Object
  },
  data() {
    return {};
  },

  created() {
    // console.log(this.formdata);
  },
  methods: {
    test() {
      this.$emit("printf", "sada");
    },
    handleRemove(file) {
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
      }
  }
};
</script>
<style scoped>
.form1 {
  padding: 10px;
  width: 100%;
  /* background-color: pink; */
}
.form1 .table table,
.form1 .table table .company {
  width: 100%;
  font-size: 14px;

  font-weight: 800;
}

.form1 input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form1 .company input {
  width: 80%;
  margin: 20px 0 15px 15px;
}
.form1 .company span {
  color: red;
}
.form1 form .table {
  /* background-color: #ccc; */
  margin: 20px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 10px #ccc;
  border-radius: 10px;
}
.form1 .table table {
  width: 100%;
  font-size: 14px;
  border: 0;
}
.form1 .table table .cols input {
  width: 85%;
}
.form1 .table table tr td {
  padding: 10px 0;
  /* background: #000; */
}
.form1 .table table input {
  margin-left: 5px;
  width: 70%;
}
.form1 .table table span {
  color: red;
}
.form1 .npg {
  width: 100%;
}
.form1 .npg ul {
  display: flex;
  flex-direction: row;
}
.form1 .npg ul li {
  list-style: none;
  margin: 40px 20px;
  border-radius: 10px;
  width: 300px;
  height: 250px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  /* border: 1px solid #a6ccf3; */
  /* border-top: none; */
  box-shadow: 2px 2px 10px #ccc;
}
.form1 .npg ul li h4 {
  padding: 0 20px;
  position: relative;
  display: block;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #a6ccf3;
  border-bottom: 1px solid #ccc;
  color: #555;
}
.form1 .npg ul li .pg {
  margin-top: 30px;
  height: 150px;
  width: 150px;
  border: 1px solid;
  border-radius: 10px;
}
.form1 .npg ul li input {
  display: none;
}
.form1 .btn {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  font-weight: 800;
  background-color: rgb(76, 77, 179);
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
