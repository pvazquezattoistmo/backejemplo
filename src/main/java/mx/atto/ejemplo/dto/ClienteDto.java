package mx.atto.ejemplo.dto;

import mx.atto.ejemplo.entity.Cliente;

public class ClienteDto {

    private Integer id;
    private String codigoClientes;
    private CategoriaDto categoriaDto;
    private TerceroDto terceroDto;

    public ClienteDto() {
    }

    public ClienteDto(Integer id, String codigoClientes, CategoriaDto categoriaDto, TerceroDto terceroDto) {
        this.id = id;
        this.codigoClientes = codigoClientes;
        this.categoriaDto = categoriaDto;
        this.terceroDto = terceroDto;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigoClientes() {
        return this.codigoClientes;
    }

    public void setCodigoClientes(String codigoClientes) {
        this.codigoClientes = codigoClientes;
    }

    public CategoriaDto getCategoriaDto() {
        return this.categoriaDto;
    }

    public void setCategoriaDto(CategoriaDto categoriaDto) {
        this.categoriaDto = categoriaDto;
    }

    public TerceroDto getTerceroDto() {
        return this.terceroDto;
    }

    public void setTerceroDto(TerceroDto terceroDto) {
        this.terceroDto = terceroDto;
    }

    public static ClienteDto fromEntidad(Cliente entidad) {
        ClienteDto salida = new ClienteDto();

        salida.setId(entidad.getId());
        salida.setCodigoClientes(entidad.getCodigoClientes());

        salida.setCategoriaDto(CategoriaDto.fromEntidad(entidad.getCategoria()));
        salida.setTerceroDto(TerceroDto.fromEntidad(entidad.getTercero()));
        
        return salida;

    }

    public Cliente toEntidadBase() {
        ClienteDto cliEntidad = this;
        Cliente salida = new Cliente();
        
        salida.setId(cliEntidad.getId());
        salida.setCodigoClientes(cliEntidad.getCodigoClientes());
     
        return salida;
    }
    
    @Override
    public String toString() {
        return "{" +
            " id='" + getId()+ "'" +
            ", codigoClientes='" + getCodigoClientes()+ "'" +
            "}";
            
    }

}
