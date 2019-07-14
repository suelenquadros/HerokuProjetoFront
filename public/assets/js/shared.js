function ShowLoading() {
    $('#site-container').css('filter', 'blur(4px)');
    $('#modalLoading').modal();
}

function HideLoading() {
    $('#site-container').css('filter', '');
    $('#modalLoading').modal('hide');
}

function RequestGET(url, AfterFunction) {
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        success: function (resultado) {
            AfterFunction(resultado);
        },
        beforeSend: function () { ShowLoading() },
        complete: function () { HideLoading() }
    });
}

function RequestPOST(url, data, AfterFunction) {
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: data,
        success: function (resultado) {
            AfterFunction(resultado);
        },
        beforeSend: function () { ShowLoading() },
        complete: function () { HideLoading() }
    });
}

function FormatarData(data) {
    if (data != null && data != "") {
        var date = new Date(data);
        var month = date.getMonth() + 1;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var retorno = '';
        retorno = ("0" + date.getDate()).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + date.getFullYear();
        if ((hours == "" || hours == "00" || hours == "0") && (minutes == "" || minutes == "00" || minutes == "0")) {
            return retorno;
        }
        else {
            return retorno += " " + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
        }
    }
    else {
        return '';
    }
}