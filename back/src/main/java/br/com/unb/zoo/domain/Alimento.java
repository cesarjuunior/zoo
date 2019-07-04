package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "alimento", schema = "zoo")
public class Alimento {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name="nome")
    private String nome;

    @ManyToOne
    @JoinColumn(name = "fornecedor")
    private Fornecedores fornecedor;

}
