class LikesController < ApplicationController
  def create
    @article = Article.find(params[:id])
  end
end
