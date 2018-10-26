'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">portafolio documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-7491558c2b579ea95b2540496f9c66e5"' : 'data-target="#xs-components-links-module-AppModule-7491558c2b579ea95b2540496f9c66e5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-7491558c2b579ea95b2540496f9c66e5"' : 'id="xs-components-links-module-AppModule-7491558c2b579ea95b2540496f9c66e5"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BancoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BancoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CajaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CajaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CategoriaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CiudadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CiudadComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ComercioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComercioComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ContenidoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContenidoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CuentaBancariaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CuentaBancariaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DeduccionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeduccionComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DepartamentoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DepartamentoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DesplegarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesplegarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EstadoRequisitoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EstadoRequisitoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/InfoUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoUserComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/IvaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IvaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MonedaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MonedaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OrdenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdenComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaisComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegimenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegimenComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RepresentanteLegalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepresentanteLegalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RequisitoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequisitoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RetiroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RetiroComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RolComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RolComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SubcategoriaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubcategoriaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SucursalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SucursalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TipoCuentaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TipoCuentaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UsuarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ValidarRequisitosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ValidarRequisitosComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/BancoModule.html" data-type="entity-link">BancoModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CajaModule.html" data-type="entity-link">CajaModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CategoriaModule.html" data-type="entity-link">CategoriaModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CiudadModule.html" data-type="entity-link">CiudadModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ComercioModule.html" data-type="entity-link">ComercioModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CuentaBancariaModule.html" data-type="entity-link">CuentaBancariaModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DeduccionModule.html" data-type="entity-link">DeduccionModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DepartamentoModule.html" data-type="entity-link">DepartamentoModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/EstadoRequisitoModule.html" data-type="entity-link">EstadoRequisitoModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/IvaModule.html" data-type="entity-link">IvaModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/MonedaModule.html" data-type="entity-link">MonedaModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/OrdenModule.html" data-type="entity-link">OrdenModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PaisModule.html" data-type="entity-link">PaisModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/RegimenModule.html" data-type="entity-link">RegimenModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/RepresentanteLegalModule.html" data-type="entity-link">RepresentanteLegalModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/RequisitoModule.html" data-type="entity-link">RequisitoModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/RetiroModule.html" data-type="entity-link">RetiroModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/RolModule.html" data-type="entity-link">RolModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SubcategoriaModule.html" data-type="entity-link">SubcategoriaModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SucursalModule.html" data-type="entity-link">SucursalModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/TipoCuentaModule.html" data-type="entity-link">TipoCuentaModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/UsuarioModule.html" data-type="entity-link">UsuarioModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ValidarRequisitosModule.html" data-type="entity-link">ValidarRequisitosModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                    </li>
                    <li class="link">
                        <a href="classes/SubCategoria.html" data-type="entity-link">SubCategoria</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/BancoService.html" data-type="entity-link">BancoService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CajaService.html" data-type="entity-link">CajaService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CategoriaService.html" data-type="entity-link">CategoriaService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CiudadService.html" data-type="entity-link">CiudadService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ComercioService.html" data-type="entity-link">ComercioService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CuentaBancariaService.html" data-type="entity-link">CuentaBancariaService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DeduccionService.html" data-type="entity-link">DeduccionService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DepartamentoService.html" data-type="entity-link">DepartamentoService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EstadoRequisitoService.html" data-type="entity-link">EstadoRequisitoService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/IvaService.html" data-type="entity-link">IvaService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MonedaService.html" data-type="entity-link">MonedaService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/OrdenService.html" data-type="entity-link">OrdenService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PaisService.html" data-type="entity-link">PaisService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RegimenService.html" data-type="entity-link">RegimenService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RepresentanteLegalService.html" data-type="entity-link">RepresentanteLegalService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RequisitoService.html" data-type="entity-link">RequisitoService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RetiroService.html" data-type="entity-link">RetiroService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RolService.html" data-type="entity-link">RolService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SubcategoriaService.html" data-type="entity-link">SubcategoriaService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SucursalService.html" data-type="entity-link">SucursalService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TipoCuentaService.html" data-type="entity-link">TipoCuentaService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UsuarioService.html" data-type="entity-link">UsuarioService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ValidarRequisitosService.html" data-type="entity-link">ValidarRequisitosService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
