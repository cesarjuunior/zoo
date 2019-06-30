package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Classe {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name="nome_da_classe")
    private String nomeDaClasse;

    @Column(name="descricao")
    private String descricao;

}
