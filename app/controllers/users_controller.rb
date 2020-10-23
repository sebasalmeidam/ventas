class UsersController < ApplicationController

  layout 'backend', except: [:show_products]
  before_action :authenticate_user!

  before_action :find_user, only: [:show, :edit, :update]
  before_action :vista_usuario , only: [:show, :edit]

  def dashboard
    
  end

  def show
    
  end

  def edit
    
  end

  def update
    if @user.update_attributes(user_params)
      redirect_to user_path(@user)
    else
      render 'edit'
    end
  end

  def show_produts
    @user = User.friendly.find(params[:id])
    render layout: 'application'
  end

  private

  def user_params
    params.require(:user).permit(:nombres, :marca, :foto_perfil, :logo)
  end

  def find_user
    if params[:id]
      @user = User.friendly.find(params[:id])
    end
  end

  def vista_usuario
    if params[:id]
      unless current_user.admin
        if current_user.id != params[:id]
          redirect_to dashboard_path
        end
      end
    end
  end
end
