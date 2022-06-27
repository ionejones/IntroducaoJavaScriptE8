class ContaBancaria {
    constructor (agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

  get saldo () {
    return this._saldo;
  }  

  set saldo(valor) {
      this._saldo = valor;
    }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return ('Operação não efetuada!  Saldo insuficiente!');
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor (agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = 'Corrente';
    this._cartaoCredito = cartaoCredito;
    this._saldo = 0;
  }

  get cartaoCredito() {
    return this._cartaoCredito
  } 

  set cartaoCredito(cartao) {
     this._cartaoCredito = cartao;
  }

}

class ContaPoupanca extends ContaBancaria {
  constructor (agencia, numero) {
    super (agencia, numero);
    this.tipo = 'Poupança';
    this._saldo = 0;
  }
 
    
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'Universitária';
    this.saldo = 0;
  }
  sacar(valor) {
    if (valor > 500) {
      return ('Valor máximo permitido para saque é R$ 500');
    }

    this._saldo = this._saldo - valor;
  }
}

