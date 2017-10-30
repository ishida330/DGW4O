$(document).ready(function() {

    var serviceRoot ;
    var headers = { "Content-Type": "application/json;", Accept: "application/json;" };

    //　jqueryでrequestする
    function queryOData() {
        var qs = $.Deferred();
        var requestUri = serviceRoot + $("#qs").val();
        $.ajax({
            url: requestUri,
            type: "GET",
            contentType: 'application/json', //ここは上り
            dataType: "json", //ここは下り
            data: null,
            async: true,
            success: qs.resolve,
            error: qs.reject
        });
        return qs.promise();
    }

    //テーブルにデータをappendする
    function appenTable(jsonData) {

        // テーブルをクリア
        $("#data-list > thead").empty();
        $("#data-list > tbody").empty();
        // 件数
        $("#row-cnt").text("件数:" + jsonData.length);

        // 見出し
        html = '<tr>';
        for (key in jsonData[0]) {
            html += '<th>' + key + '</th>';
        }
        html += '</tr>';
        $("#data-list").append(html);

        // データ
        $.each(jsonData, function(i, data) {
            html = '<tr>';
            for (key in data) {
                html += '<td>' + data[key] + '</td>';
            }
            html += '</tr>';
            $("#data-list").append(html);
        });

    }
    //　検索ボタン 
    $("#btn-search").click(function() {
        serviceRoot = $("#url").val();
        $.when(queryOData())
            .done(function(data) {
                console.log(data);
                appenTable(data.value);
            })
            .fail(function(err) {
                console.log("query request failed:" + JSON.stringify(err));
                alert("query request failed:" + JSON.stringify(err));
            });
        console.log("検索しました");
    });
});