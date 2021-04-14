//Evento para não recarregar a página ao clicar no submit
document.querySelector("form")
.addEventListener(
	"submit", function(evento){
	evento.preventDefault();
	}
)
//Evento do click submit
document.querySelector("input[name=Enviar]")
.addEventListener(
	"click", function(){
		
		var inputSelect = document.querySelectorAll("input")//selecionar todos os inputs
		var textSelect = document.querySelectorAll("textarea")//selecionar o textarea
		var textArr = Array.from(textSelect)//criar um array do text area
		textArr = textArr.map(function(atual){//Cria um objeto do array textarea
				var c = {Valor: atual.value,
	        			Nome: atual.name}
						return c
			}
		)

		var inputArr = Array.from(inputSelect).map(function(atual){//Cria o array dos inputs e transforma em objeto
			var c = {Valor: atual.value,
					Nome: atual.name};
					return c;
				});
		//remove do objeto o input do tipo submit
		inputArr = inputArr.filter(function(atual){
			if (atual.Valor != "Enviar"){
				return atual;
			} 
		})
		//faz a junção dos dois objetos
		inputArr = [...inputArr,...textArr];

		//verifica se todos os campos foram preenchidos
		for (i in inputArr){
				//verifica se o campo email foi preenchido com email válido
				if (inputArr[i].Valor != "") {
					//Validação email
					if (inputArr[i].Nome == "Email"){
						var email = inputArr[i].Valor;//Capturar o valor do campo email
						var user = email.substring(0, email.indexOf("@"));//Capturar a primeira parte do email substring(pos 0 até @)
						var domain = email.substring(email.indexOf("@")+1, email.length)//Capturar domínio substring(@ até ultima pos domain)
						if((user.length>=1)&&
							(domain.length>=3)&&
							(user.search("@")==-1)&&
							(domain.search("@")==-1)&&
							(user.search(" ")==-1)&&
							(domain.search(" ")==-1)&&
							(domain.search(".")!=-1)&&
							(domain.indexOf(".")>=1)&&
							(domain.lastIndexOf(".") < domain.length -1)){

						} else {
							alert("Email Inválido")
						}
					}
					//Validação telefone
					if(inputArr[i].Nome == "Telefone"){
						var num = inputArr[i].Valor.replace(/\D/g, "");
						if((num.length ==10 || num.length ==11)){

						} else {
							alert("Telefone Inválido")
						}

					}

				}else{
					alert(`O campo ${inputArr[i].Nome} não foi preenchido`);
					return inputArr = false
					break;
				}
		}
		if (inputArr != false){
			alert(`Sua mensagem foi enviada`)
		}
	}
)
//Buscar cep
function buscaCep(cepDigitado){
	var cep = cepDigitado.replace(/\D/g, "");

	if (cep != "") {
		var valida = /^[0-9]{8}$/;//expressão regular cep br

		if(valida.test(cep) == true){ //validar o cep 
			document.querySelector("input[name=Rua]").value="";
			document.querySelector("input[name=Bairro]").value="";
			document.querySelector("input[name=Cidade]").value="";
			document.querySelector("input[name=Estado]").value="";

			var script = document.createElement("script");

			script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=callback";

			document.body.appendChild(script);

		} else {
			alert("Cep Inválido")
		}
	} else {
		alert("O campo Cep não foi preenchido")
	}
}
//Preencher o cep no form
function callback(valor){
	if(!("erro" in valor)){
		document.querySelector("input[name=Rua]").value=(valor.logradouro);
		document.querySelector("input[name=Rua]").setAttribute('disabled','disabled');
		document.querySelector("input[name=Bairro]").value=(valor.bairro);
		document.querySelector("input[name=Bairro]").setAttribute('disabled','disabled');
		document.querySelector("input[name=Cidade]").value=(valor.localidade);
		document.querySelector("input[name=Cidade]").setAttribute('disabled','disabled');
		document.querySelector("input[name=Estado]").value=(valor.uf);
		document.querySelector("input[name=Estado]").setAttribute('disabled','disabled');
	} else {
		alert("Cep não encontrado")
	}
}