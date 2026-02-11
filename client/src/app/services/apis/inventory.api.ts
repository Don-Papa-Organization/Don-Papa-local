import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "../../types/api-response.type";
import { Producto } from "../../domain/inventory/models/producto.model";
import { CategoriaProducto } from "../../domain/inventory/models/categoriaProducto.model";
import { ListCatalogRequestDto } from "../../domain/inventory/dtos/request/list-catalog.request.dto";
import { ListProductsRequestDto } from "../../domain/inventory/dtos/request/list-products.request.dto";
import { CreateProductRequestDto } from "../../domain/inventory/dtos/request/create-product.request.dto";
import { UpdateProductRequestDto } from "../../domain/inventory/dtos/request/update-product.request.dto";
import { UpdateProductStockRequestDto } from "../../domain/inventory/dtos/request/update-product-stock.request.dto";
import { CreateCategoryRequestDto } from "../../domain/inventory/dtos/request/create-category.request.dto";
import { UpdateCategoryRequestDto } from "../../domain/inventory/dtos/request/update-category.request.dto";
import { CatalogoProductosDataDto } from "../../domain/inventory/dtos/response/list-catalog.response.dto";
import { ListProductsDataDto } from "../../domain/inventory/dtos/response/list-products.response.dto";
import { API_ENDPOINTS, buildApiUrl } from "../../config/api.config";

@Injectable({ providedIn: "root" })
export class InventoryApi {
	private readonly baseUrl = buildApiUrl(API_ENDPOINTS.inventory.catalog());
	private readonly productsUrl = buildApiUrl(API_ENDPOINTS.inventory.products());
	private readonly categoriesUrl = buildApiUrl(API_ENDPOINTS.inventory.categories());

	constructor(private http: HttpClient) {}

	listCatalog(dto?: ListCatalogRequestDto): Observable<ApiResponse<CatalogoProductosDataDto>> {
		return this.http.get<ApiResponse<CatalogoProductosDataDto>>(this.baseUrl, {
			params: dto as any
		});
	}

	getCatalogDetail(id: number): Observable<ApiResponse<Producto>> {
		return this.http.get<ApiResponse<Producto>>(buildApiUrl(API_ENDPOINTS.inventory.catalogDetail(id)));
	}

	listProducts(dto?: ListProductsRequestDto): Observable<ApiResponse<ListProductsDataDto>> {
		return this.http.get<ApiResponse<ListProductsDataDto>>(this.productsUrl, {
			params: dto as any
		});
	}

	getProduct(id: number): Observable<ApiResponse<Producto>> {
		return this.http.get<ApiResponse<Producto>>(buildApiUrl(API_ENDPOINTS.inventory.productDetail(id)));
	}

	createProduct(dto: CreateProductRequestDto): Observable<ApiResponse<Producto>> {
		return this.http.post<ApiResponse<Producto>>(this.productsUrl, dto);
	}

	updateProduct(id: number, dto: UpdateProductRequestDto): Observable<ApiResponse<Producto>> {
		return this.http.put<ApiResponse<Producto>>(buildApiUrl(API_ENDPOINTS.inventory.productDetail(id)), dto);
	}

	updateProductStock(id: number, dto: UpdateProductStockRequestDto): Observable<ApiResponse<Producto>> {
		return this.http.patch<ApiResponse<Producto>>(buildApiUrl(API_ENDPOINTS.inventory.productStock(id)), dto);
	}

	uploadProductImage(id: number, imagen: File): Observable<ApiResponse<Producto>> {
		const formData = new FormData();
		formData.append("imagen", imagen);
		return this.http.post<ApiResponse<Producto>>(buildApiUrl(API_ENDPOINTS.inventory.productImage(id)), formData);
	}

	deleteProduct(id: number): Observable<ApiResponse<null>> {
		return this.http.delete<ApiResponse<null>>(buildApiUrl(API_ENDPOINTS.inventory.productDetail(id)));
	}

	listCategories(): Observable<ApiResponse<CategoriaProducto[]>> {
		return this.http.get<ApiResponse<CategoriaProducto[]>>(this.categoriesUrl);
	}

	getCategory(id: number): Observable<ApiResponse<CategoriaProducto>> {
		return this.http.get<ApiResponse<CategoriaProducto>>(buildApiUrl(API_ENDPOINTS.inventory.categoryDetail(id)));
	}

	createCategory(dto: CreateCategoryRequestDto): Observable<ApiResponse<CategoriaProducto>> {
		return this.http.post<ApiResponse<CategoriaProducto>>(this.categoriesUrl, dto);
	}

	updateCategory(id: number, dto: UpdateCategoryRequestDto): Observable<ApiResponse<CategoriaProducto>> {
		return this.http.put<ApiResponse<CategoriaProducto>>(buildApiUrl(API_ENDPOINTS.inventory.categoryDetail(id)), dto);
	}

	deleteCategory(id: number): Observable<ApiResponse<null>> {
		return this.http.delete<ApiResponse<null>>(buildApiUrl(API_ENDPOINTS.inventory.categoryDetail(id)));
	}
}
