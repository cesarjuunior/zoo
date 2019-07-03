package br.com.unb.zoo.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "limpeza", schema = "zoo")
public class Limpeza {

    @Id
    private Long id;

}
