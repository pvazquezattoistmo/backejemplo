package mx.atto.ejemplo.dto;

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

}
