package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "container", schema = "zoo")
public class Container {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name="tipo")
    private String tipo;

    @ManyToOne
    @JoinColumn(name = "ala")
    private Ala ala;
}
