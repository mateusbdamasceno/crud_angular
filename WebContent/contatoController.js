var crud = angular.module("crud", []);

crud.controller("contatoController", function ($scope){
	$scope.novoContato = {};
	$scope.contatoSelecionado = {};
	
	$scope.contatos = [{nome: "Joao", telefone: 3645665}];
	
	$scope.salvar = function(){
		$scope.contatos.push($scope.novoContato);
		$scope.novoContato = [];
	};
	
	$scope.selecionaContato = function(contato){
		$scope.contatoSelecionado = contato;
	};
	
	$scope.alterarContato = function(){
		
	}
	
	$scope.excluirContato = function(){
		$scope.contatos.splice($scope.contatos.indexOf($scope.contatoSelecionado), 1);
	}
});
