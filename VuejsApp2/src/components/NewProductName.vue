<template>
    <div class="newPDName">
        <h2>新增品名工具</h2>
        <el-row>
            <el-col :span="4">
                Group :
                <el-select v-model="groupSelect" placeholder="選取Group" @change="getCategory">
                    <el-option v-for="item in groupList"
                               :key="item.Value"
                               :label="item.Text"
                               :value="item.Value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                Category :
                <el-select v-model="categorySelect" placeholder="選取Category">
                    <el-option v-for="item in categoryList"
                               :key="item.Value"
                               :label="item.Text"
                               :value="item.Value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row style="margin: 20px 0;">            
            <el-col :span="8">
                Product Name :<el-input v-model="PDName" placeholder="請輸入PD Name"></el-input>
            </el-col>            
        </el-row>
        <el-row style="margin: 20px 0;">
            <el-col :span="8">
                <el-button type="primary" icon="el-icon-plus" @click="insertPDName">新增</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                groupList: [],
                categoryList: [],
                groupSelect: '',
                categorySelect: '',
                PDName: ''
            }
        },      
        created() {  
            this.$http
                .get('http://192.168.1.145/IT/api/IT/GetProductGroup')
                .then(response => (this.groupList = response.data)) 
        },
        methods: {
            getCategory()
            {
                this.categorySelect = '';

                this.$http
                    .get('http://192.168.1.145/IT/api/IT/GetProductCategory', {
                        params: {
                            GroupId: this.groupSelect
                        }
                    })
                    .then(response => (
                        this.categoryList = response.data
                    ));
            },
            insertPDName() {
                this.$http
                    .post('http://192.168.1.145/IT/api/IT/InsertProductName', {
                        
                            GroupId: this.groupSelect,
                            CategoryId: this.categorySelect,
                            ProductName: this.PDName
                        
                    })
                    .then(response => {
                        if (response.data.IsSucess) {
                            this.categorySelect = null
                            this.$message.success('新增成功')
                        }
                        else {
                            this.$message.error(response.data.Message)
                        }                        
                        })
                    .catch(err => {
                        this.$message.error(err.response.data.ExceptionMessage);
                    });
            }
        }
    }
</script>

<style scoped>
</style>