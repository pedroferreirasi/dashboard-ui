import { COUNT_NUMBERS_CNPJ, COUNT_NUMBERS_CPF } from './constant';

function addCpfMask(cpf: string): string {
  // Remove tudo o que não é dígito
  cpf = cpf.replace(/\D/g, '');
  // Coloca um ponto entre o terceiro e o quarto dígitos
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  // Coloca um ponto entre o terceiro e o quarto dígitos de novo (para o segundo bloco de números)
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  // Coloca um hífen entre o terceiro e o quarto dígitos
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return cpf;
}

function addCnpjMask(cnpj: string): string {
  // Remove tudo o que não é dígito
  cnpj = cnpj.replace(/\D/g, '');
  // Coloca ponto entre o segundo e o terceiro dígitos
  cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
  // Coloca ponto entre o quinto e o sexto dígitos
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  // Coloca uma barra entre o oitavo e o nono dígitos
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
  // Coloca um hífen depois do bloco de quatro dígitos
  cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');
  return cnpj;
}

function addCpfCnpjMask(cpfCnpj: string): string {
  const cpfCnpjNumber: string = removeCpfCnpjMask(cpfCnpj);
  if (cpfCnpjNumber.length <= COUNT_NUMBERS_CPF)
    return addCpfMask(cpfCnpjNumber);
  else if (
    cpfCnpjNumber.length > COUNT_NUMBERS_CPF &&
    cpfCnpjNumber.length <= COUNT_NUMBERS_CNPJ
  )
    return addCnpjMask(cpfCnpjNumber);
  else return cpfCnpjNumber;
}

function removeCpfCnpjMask(cpfCnpj: string): string {
  let result = '';
  if (cpfCnpj) result = cpfCnpj;
  // Remove tudo o que não é dígito
  return result.replace(/\D/g, '');
}

export { addCpfCnpjMask, addCpfMask, addCnpjMask, removeCpfCnpjMask };
