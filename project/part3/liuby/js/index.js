var floors = function () {
    function getData(url,ele,callback) {
        console.log(callback);
        $.ajax({
            url:url,
            dataType: 'json',
            success: function (data) {
                callback(data,ele)
            }
        })
    }
    function lazyImg() {

    }

    function bindData(data,ele) {
        var eleList = $(ele).find(".sort");
        $.each(eleList,function(index,item){
            if($(this).find(".box-title")){
                $(this).find(".box-title").html(data[index].name).attr('url',data[index].url);
            }
            if($(this).find(".box-subtitle")){
                $(this).find(".box-subtitle").html(data[index].description).attr('url',data[index].url);
            }
            if($(this).find(".lazy-img")){
                var newData =data[index],imgList = $(this).find(".lazy-img");
                $.each(imgList,function(index,item){
                     $(this).attr('src',newData.imgList[index].imgUri);
                     $(this).parent('a').attr('href',newData.imgList[index].imgHref)
                })
            }
        });
    }

    return {
        init: function () {
            getData('../json/fashionista.json','.fashionista',bindData);
            getData('../json/IntelligentPioneer.json','.IntelligentPioneer',bindData);
            getData('../json/departmentStore.json','.departmentStore',bindData);
            getData('../json/bestForHome.json','.bestForHome',bindData);
        }
    }
}()
floors.init()