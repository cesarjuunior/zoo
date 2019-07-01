package br.com.unb.zoo.interfaces.rest;

import br.com.unb.zoo.domain.Animais;
import br.com.unb.zoo.repository.AnimaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/animais"})
public class AnimaisController {

    @Autowired
    private AnimaisRepository repository;

    @GetMapping
    public List findAll(){
        return repository.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity findById(@PathVariable Long id){
        return  repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @PostMapping
    public Animais create(@RequestBody Animais animais){
        return repository.save(animais);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody Animais animais){
        return repository.findById(id)
                .map(record -> {
                    record.setAlimento(animais.getAlimento());
                    record.setAltura(animais.getAltura());
                    record.setClasse(animais.getClasse());
                    record.setContainer(animais.getContainer());
                    record.setEspecie(animais.getEspecie());
                    record.setNome(animais.getNome());
                    record.setPeso(animais.getPeso());
                    record.setResponsavel(animais.getResponsavel());
                    Animais updaded = repository.save(record);
                    return ResponseEntity.ok().body(updaded);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path ={"/{id}"})
    public ResponseEntity<?> delete(@PathVariable long id) {
        return repository.findById(id)
                .map(record -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
