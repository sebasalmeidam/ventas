class CategoriesController < ApplicationController
  layout 'backend'
  before_action :authenticate_user!

  def index
    @categories = current_user.categories
  end

  def show
    @category = current_user.categories.find_by(id: params[:id])
    @products = @category.products
  end

  def new
    @category = current_user.categories.build
  end

  def create
    @category = current_user.categories.build(category_params)
    if @category.save
      redirect_to categories_path(@category)
    else
      render 'new'
    end
  end

  def edit
    @category = current_user.categories.find_by(id: params[:id])
  end

  def update
    @category = current_user.categories.find_by(id: params[:id])
    if @category.update_attributes(category_params)
      redirect_to categories_path(@category)
    else
      render 'edit'
    end
  end

  def destroy
    @category = current_user.categories.find_by(id: params[:id])
    @category.destroy
    redirect_to categories_path(@category)
  end

  private

  def category_params
    params.require(:category).permit(:nombre, :descripcion, :user)
  end
  

end
