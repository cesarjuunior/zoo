package br.com.unb.zoo.interfaces.rest;

import br.com.unb.zoo.domain.model.ator.Ator;
import br.com.unb.zoo.domain.model.ator.AtorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping({"/atores"})
public class AtorController {

    private AtorRepository atorRepository;

    AtorController(AtorRepository atorRepository){
        this.atorRepository = atorRepository;
    }

    @GetMapping
    public List findAll(){
        return atorRepository.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity findById(@PathVariable Long id){
        return  atorRepository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @PostMapping
    public Ator create(@RequestBody Ator ator){
        return atorRepository.save(ator);
    }

    @PutMapping(value = "/{id")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody Ator ator){
        return atorRepository.findById(id)
                .map(record -> {
                    record.setNomeReal(ator.getNomeReal());
                    record.setNomeFantasia(ator.getNomeFantasia());
                    Ator updaded = atorRepository.save(record);
                    return ResponseEntity.ok().body(updaded);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path ={"/{id}"})
    public ResponseEntity<?> delete(@PathVariable long id) {
        return atorRepository.findById(id)
                .map(record -> {
                    atorRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
