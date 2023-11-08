import { css } from "lit-element";

export default css `
.cont2{
    position:absolute;
    width:100%;
    height:500px;
    background: #00000075;

}
.cont1{
    position: relative;
}
.color{
    color: aliceblue;
}
.img{
    width:100%;
    height:500px;
}
.position{
    position relative;
    right:100%;
}
.color1{
    width:2000px;
}
.content{
    width:400px;
    height:700px;
    background:#6ab2c475;
}

.content1{
    width:900px;
    height:700px;
    background:#6ab2c475;
}
.content2{
    width:1000px;
    height:1000px;
    background:#6ab2c475;
}
.btn1{
    position:relative;
    left:40%;
}
.btn{
    position:relative;
    left:30%;
}
.font{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.buton{
    
    background:#b2e4f075;
}


.main{
    width: 70%;
    height: 700px;
    display: flex;
    height: 500px;
    max-width: 900px;
    margin: 10px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px 10px;
}

.formContainer{
    position: relative;
    width: 50%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.formContainer h2{
    margin-bottom: 10px;
    font-size: 40px;
    color: black;
}

.formContainer form{
    width: 80%;
}

.inputContainer{
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
    position: relative;
    background-color: rgb(223, 235, 240);
    border-radius: 20px;
}

.inputContainer input{
    padding: 15px 0;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
}


.inputContainer input::placeholder{
    font-size: 20px;
}


.inputContainer i{
    width: 40px;
    color: rgb(169, 185, 200);
    font-size: 20px;
}

.formContainer button{
    color: rgba(0, 195, 255);
    background-color: white;
    padding: 10px 30px;
    border: 1px solid rgba(0, 195, 255);
    border-radius: 15px;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
}

.formContainer button:hover{
    background-color: rgb(49, 196, 241);
    color: white;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  .modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
  }


.titleContainer{
    width: 50%;
    height: 100%;
    background-image: url(../img/perro.webp);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}


.titleContainer h1{
    font-size: 50px;
}

.titleContainer h2{
    font-size: 40px;
    font-weight: 200;
}

.error{
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    padding: 20px 10px;
    font-size: 18px;
    position: absolute;
    top: 0;
    right: 0;
    width: 270px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 7px rgba(0, 0, 0, .1);
    animation: animationFade .5s cubic-bezier(0.39, 0.575, 0.565, 1);
}

@keyframes animationFade{
    0%{
        opacity: 0;
        transform: translate(-100px) scale(0.9);
    }
    100%{
        opacity: 1;
        transform: translateY(0px) scale(1);
    }
}

@media screen and (max-width:900px) {

    .main{
        width: 80%;
        height: auto;        
    }
    .titleContainer{
        display: none;
    }

    .formContainer{
        width: 100%;
        border-radius: 20px;
        padding: 30px 0;
    }

    .error{
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: none;
    }

}

.alineacion{
    padding: -30px;
}

`;