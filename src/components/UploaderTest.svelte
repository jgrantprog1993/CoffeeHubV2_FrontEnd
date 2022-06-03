<script>
    /// https://github.com/marahmanjs/sveltekit-upload/blob/main/src/components/uploader.svelte ///
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    const cloudName = "dt7qt2lwx"
    const unsignedUploadPreset = 'uudzi6cp';
    export let multiple = false
    let uploadedFiles = []
    function handleUpload(event){
        if(multiple ){
            for(let file = 0; file < event.target.files.length; file++){
                uploadFile(event.target.files[file] , event.target.files.length)
            }
        }else{
            uploadFile(event.target.files[0] , 1)
        }
    }
    async function uploadFile(file ,  length){
        var formdata = new FormData();
        formdata.append("file", file , file.name)
        // console.log('LOGGING URL? -> ' + file.name)
        formdata.append('upload_preset', unsignedUploadPreset);
        var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        var response = await fetch(url, {
            method: 'POST', 
            body: formdata
        })
        response = await response.json()
        emitData(response , length)
    }
    function emitData(info , length){
        if(length == 1){
            dispatch('upload' , info.url)
        }else{
            uploadedFiles.push(info.url)
            if(length === uploadedFiles.length){
                dispatch('upload' , uploadedFiles)
                
                
            }
        }
    }
</script>

<input type="file" name="file"  accept="image/x-png,image/jpeg,application/pdf" on:change={handleUpload} multiple={multiple}>