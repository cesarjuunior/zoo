package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Animais {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name="nome")
    private String nome;

    @ManyToOne
    private Classe classe;

    @ManyToOne
    private Alimento alimento;

    @ManyToOne
    private Container container;

    @Column(name="especie")
    private String especie;

    @Column(name="altura")
    private String altura;

    @Column(name="peso")
    private String peso;

    @ManyToOne
    private Funcionarios responsavel;
}
