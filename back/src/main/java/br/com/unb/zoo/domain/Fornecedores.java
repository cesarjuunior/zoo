package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Fornecedores {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "nome")
    private String nome;

    @ManyToOne
    private Endereco endereco;

}
