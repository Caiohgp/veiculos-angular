import { Modelo } from "./modelo";
import { Opcional } from './opcional';

export interface Veiculo {
  id: number;
  nome: string;
  placa: string;
  renavam: string;
  dataDeCadastro: string;
  valor: number;
  modelo: Modelo;
  opcional: Opcional;
}
