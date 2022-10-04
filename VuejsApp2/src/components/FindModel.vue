<template>
    <div class="findModel">
        <h1>料號對應車型比對工具</h1>
        <el-upload class="upload-demo"
                   drag
                   action="http://192.168.1.145/IT/api/IT/FindModel"
                   accept=".xlsx"
                   :on-success="uploadSuccess">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">將文件拖曳到這裡，或<em>點選</em>我</div>
            <div class="el-upload__tip" slot="tip">
                1. 只能上傳xlsx文件<br>
                2. 僅處理第一張Sheet<br>
                3. 標題列將[料號]欄位標題改成[Part No]，大小寫皆可，空格必須<br>                
            </div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        data() {
            return { id: 1 }
        },
        methods: {
            uploadSuccess(res) {
                if (res.IsSucess) {
                    this.$message.success('處理完成!');
                    window.open('http://192.168.1.145/IT/api/IT/DownloadFile?f=' + res.Message, '_blank');
                }
                else {
                    this.$message.error(res.Message);
                }
                
            }
        }
    }
</script>

<style scoped>
</style>