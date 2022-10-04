<template>
    <div class="upload">
        <h1>Packing 自動序號編輯工具</h1>
        <el-upload class="upload-demo"
                   drag
                   action="http://192.168.1.145/IT/api/IT/UploadPackingSerial"
                   accept=".xlsx"
                   :on-success="uploadPackingSuccess">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">1. 只能上傳xlsx文件<br>
            2. 需要代號的 "第一箱" 填上 "代號"，否則預設空白<br>
            3. 第一箱"起始序號"如有特殊需求填入指定數值，否則預設從"1"開始編碼</div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        data() {
            return { id: 1 }
        },
        methods: {
            uploadPackingSuccess(res) {
                this.$message('處理完成!');
                window.open('http://192.168.1.145/IT/api/IT/DownloadFile?f=' + res, '_blank');
            }
        }
    }
</script>

<style scoped>
</style>