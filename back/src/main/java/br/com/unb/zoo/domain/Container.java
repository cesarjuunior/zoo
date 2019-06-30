package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Container {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name="tipo")
    private String tipo;

    @ManyToOne
    private Ala ala;
}
