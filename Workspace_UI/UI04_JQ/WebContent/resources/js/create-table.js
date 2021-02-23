
function makeTable(elem){ //elem : ROW 
    $table = $("<table border=1>"); //변수 var 를 생략할 수 있다. 

    //데이터 항목 넣어주는거 
    for (var i = 0; i<1; i++){ //한번만 돌아가서 
        $tr = $("<tr>"); //tr태그 
        for(var j=0; j<elem.eq(0).children().length;j++){ 
            //ROW의 0번지의 자식의 길이만큼 (5) 돈다 
           $td = $("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
           //자식요소의 j번지의 tagName을 가져오는데 0부터 4까지 5번 도는데 그 태그내임이 
           /*
           <tr>
            <td>EMPLOYEE_ID</td>
            <td>LAST_NAME</td>
            <td>EMAIL</td>
            <td>PHONE_NUMBER</td>
            <td>HIRE_DATE</td>
           </tr>

           */
           
           //prop:  일치하는 집합 의 첫 번째 요소에 대한 속성 값만 가져옵니다 . 
           $tr.append($td);  //tr의 가장 끝에 td를 넣어준다 
        } 
        $table.append($tr); 
    }
   
    //여기는 데이터 넣어주는거 
    for(var i= 0;i<elem.length;i++){
        $tr =  $("<tr>");
        for(var j=0; j<elem.eq(i).children().length;j++){
            $td = $("<td>").append(elem.eq(i).children().eq(j).text());//text() 값을 가져와서 td에 저장한다. 
            $tr.append($td);
        }
        $table.append($tr);
    }
    return $table;
}