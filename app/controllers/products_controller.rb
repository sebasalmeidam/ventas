class ProductsController < ApplicationController
  layout 'backend'
  before_action :authenticate_user!

  def index
    @products = current_user.products
  end

  def show
    @product = current_user.products.find_by(id: params[:id])
    @products = current_user.products
  end

  def new
    @category = current_user.categories.find_by(id: params[:category_id]) 
    @product = @category.products.build
  end

  def create
    @category = current_user.categories.find_by(id: params[:category_id]) 
    @product = @category.products.build(product_params)
    if @product.save
      redirect_to category_path(@product.category)
    else
      render 'new'
    end
  end

  def edit
    @category = current_user.categories.find_by(id: params[:category_id]) 
    @product = current_user.products.find_by(id: params[:id])
  end

  def update
    @product = current_user.products.find_by(id: params[:id])
    if @product.update_attributes(product_params)
      redirect_to category_path(@product.category)
    else
      render 'edit'
    end
  end

  def destroy
    @product = current_user.products.find_by(id: params[:id])
    @product.destroy
    redirect_to category_path(@product.category)
  end

  private

  def product_params
    params.require(:product).permit(:codigo, :nombre, :descripcion, :precio, imagenes: [])
  end

end
