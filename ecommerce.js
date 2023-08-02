let Name = document.getElementById("name");
let email = document.getElementById("email");
let orders = document.getElementById("orders");


let myjson = localStorage.getItem("User");
let users = JSON.parse(myjson)


document.getElementById("user_name").innerHTML = users["Name"];
document.getElementById("user_email").innerHTML = users["Email"];

let myJSON = localStorage.getItem("User");
let filterUser = JSON.parse(myJSON);


let click = document.getElementById("click");
click.addEventListener('click', myFunction);
function myFunction() {
    let p_h = prompt("Please Enter a Product Company");
    let p_p = prompt("Please Enter a Product Name");
    let p_c = prompt("Please Enter a Product Price");
    // let p_s = prompt("Please Enter a Product red or NOT");

    let lastUser = localStorage.getItem("User");
    let User = JSON.parse(lastUser);
    let obj = {
        "Email": User["Email"],
        "Product Name": p_h,
        "Product price": p_p,
        "Product total": p_c,
        // "Product status": p_s
    }

    let myjson = localStorage.getItem("Table")
    let Table = JSON.parse(myjson);

    let pro_div = document.createElement('div')
    pro_div.className = "pro";
    let des_img = document.createElement('img')
    des_img.className = "des_img";
    des_img.src = "images/f1.jpg"
    pro_div.append(des_img);


    let des_div = document.createElement('div')
    des_div.className = "des";
    let span = document.createElement('span')
    span.innerHTML = p_h;
    des_div.append(span);
    let h5 = document.createElement('h5')
    h5.innerHTML = p_p;
    des_div.append(h5);
    let h4 = document.createElement('h4')
    h4.innerHTML = p_c
    des_div.append(h4);

    pro_div.append(des_div);

    let proContainer = document.getElementById("pro-container");
    proContainer.append(pro_div);

    let product1 = document.getElementById("product1");
    product1.append(proContainer);



    let edit_btn = document.createElement('button')
    edit_btn.className = "edit"
    edit_btn.innerHTML = "Edit";
    edit_btn.addEventListener('click', function (e) {
        if (e.target.className == "edit") {
            let prompt1 = prompt("Please Edit Company Name");
            let prompt2 = prompt("Please Edit Product Name");
            let prompt3 = prompt("Please Enter a Product Price");
            span.innerHTML = prompt1;
            h5.innerHTML = prompt2;
            h4.innerHTML = prompt3;
            let edt = localStorage.getItem('Table')
            let edit_parse = JSON.parse(edt);
            for (let i = 0; i < edit_parse.length; i++) {
                // console.log(edit_parse[i]["Product Name"])
                console.log(obj["Product Name"])

                if (edit_parse[i]["Product Name"] == obj["Product Name"]) {
                    edit_parse[i] = {
                        "Email": User["Email"],
                        "Product Name": prompt1,
                        "Product price": prompt2,
                        "Product total": prompt3
                    }

                }
                console.log(edit_parse);
            }
            let edit_str = JSON.stringify(edit_parse);
            let edit_set = localStorage.setItem('Table', edit_str);
        }
    })

    let del_btn = document.createElement('button')
    del_btn.className = "delete"
    del_btn.innerHTML = "Delete Product";
    del_btn.addEventListener('click', function (e) {
        if (e.target.className === "delete") {
            e.target.parentElement.remove()
            let del = localStorage.getItem('Table')
            let del_parse = JSON.parse(del);
            let objFilter = del_parse.filter((obj1) => {
                return obj1['Product Name'] !== obj["Product Name"]
            })

            let del_str = JSON.stringify(objFilter);
            let del_set = localStorage.setItem('Table', del_str);

        }
    })
    proContainer.append(del_btn);


    if (Table == null) {
        Table = [];
    }

    Table.push(obj);

    pro_div.append(del_btn);
    pro_div.append(edit_btn);


    let myJSON = JSON.stringify(Table);
    localStorage.setItem("Table", myJSON);
}



let json = localStorage.getItem("Table");
let Table = JSON.parse(json);

for (let i = 0; i < Table.length; i++) {
    let a = Table[i];
console.log(a);
    let lastUser = localStorage.getItem("User");
    let User = JSON.parse(lastUser);

    if (User["Email"] == a["Email"]) {

        let pro_div = document.createElement('div')
        pro_div.className = "pro";
        let des_img = document.createElement('img')
        des_img.className = "des_img";
        des_img.src = "images/f1.jpg"
        pro_div.append(des_img);


        let des_div = document.createElement('div')
        des_div.className = "des";
        let span = document.createElement('span')
        span.innerHTML = a["Product Name"];
        des_div.append(span);
        let h5 = document.createElement('h5')
        h5.innerHTML = a["Product price"];
        des_div.append(h5);
        let h4 = document.createElement('h4')
        h4.innerHTML = a["Product total"]
        des_div.append(h4);

        pro_div.append(des_div);

        let edit_btn = document.createElement('button')
        edit_btn.className = "edit"
        edit_btn.innerHTML = "Edit";
        

        let del_btn = document.createElement('button')
        del_btn.className = 'delete';
        del_btn.innerHTML = "Delete Product";

        edit_btn.addEventListener('click', function (e) {
            if (e.target.className == "edit") {
                let prompt1 = prompt("Please Edit Company Name");
                let prompt2 = prompt("Please Edit Product Name");
                let prompt3 = prompt("Please Enter a Product Price");
                span.innerHTML = prompt1;
                h5.innerHTML = prompt2;
                h4.innerHTML = prompt3;
                let edt = localStorage.getItem('Table')
                let edit_parse = JSON.parse(edt);
                for (let i = 0; i < edit_parse.length; i++) {
                    // console.log(edit_parse[i]["Product Name"])
                    // console.log(Table["Product Name"])

                                                                                                                                                                                                                                                                                                      if (edit_parse[i]["Product Name"] == a["Product Name"]) {
                        edit_parse[i] = {
                            "Email": User["Email"],
                            "Product Name": prompt1,
                            "Product price": prompt2,
                            "Product total": prompt3
                        }

                    }
                    console.log(edit_parse);
                }
                let edit_str = JSON.stringify(edit_parse);
                let edit_set = localStorage.setItem('Table', edit_str);
            }
        })


        del_btn.addEventListener('click', function (e) {
            if (e.target.className === "delete") {
                e.target.parentElement.remove()
                let del = localStorage.getItem('Table')
                let del_parse = JSON.parse(del);
                let objFilter = del_parse.filter((obj) => {
                    return obj['Product Name'] !== a["Product Name"]
                })
                console.log(a["Product Name"]);

                let del_str = JSON.stringify(objFilter);
                let del_set = localStorage.setItem('Table', del_str);

            }
        })

        pro_div.append(del_btn);
        pro_div.append(edit_btn);

        let proContainer = document.getElementById("pro-container");
        proContainer.append(pro_div);
    }
}   