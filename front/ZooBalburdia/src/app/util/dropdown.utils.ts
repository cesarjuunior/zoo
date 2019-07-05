import {SelectItem} from 'primeng/api';

export class DropdownUtils {
  static LABEL_DESCRICAO = 'descricao';
  static LABEL_NOME = 'nome';

  static LABEL_NACIONALIDADE = 'nacionalidade';
  static VALUE_ID = 'id';

  static buildDropDown( label: string, value: string, array: any[] ) {
    const itens: SelectItem[] = [];
    array.forEach( item => {
      itens.push( { label: item[ label ], value: item[ value ] } );
    } );
    return itens;
  }
}
