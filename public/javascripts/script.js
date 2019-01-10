document.querySelectorAll('.delete').forEach(function(el){
    el.addEventListener('click', function(){
        var id = el.getAttribute('data-id');
        var method = el.getAttribute('data-method');
        makeRequest(id, method, null, function(res) {
            element.closest('.divGare').remove();
        });
    })
});

document.querySelectorAll('.update').forEach(function(el){
    el.addEventListener('click', function(){
        makeRequest(el.getAttribute('data-id'), "PUT")
    })
});

function makeRequest(id, method, datas, callback) {

    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              callback(JSON.parse(httpRequest.responseText));
            } else {
              alert('Un problème est survenu avec la requête.');
            }
        }
    }
    httpRequest.open(method, "/api/" + id, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(datas ? JSON.stringify(datas) : null);
}


function alertContents(httpRequest){

    if (httpRequest.readyState == XMLHttpRequest.DONE) {
        if (httpRequest.status == 200) {
            alert(httpRequest.responseText);
        } else {
            alert('Un problème est survenu avec la requête.');
        }
    }

}