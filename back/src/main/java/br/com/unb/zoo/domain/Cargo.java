package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "cargo", schema = "zoo")
public class Cargo {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name="nome_cargo")
    private String nomeCargo;

    @Column(name="salario")
    private Integer salario;
}
