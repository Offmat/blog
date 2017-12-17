class LikesController < ApplicationController
  def create
    like = Like.new(article_id: params[:article_id], user: current_user)
    like.save

    redirect_to article_path(like.article)
  end
end
