class CommentsController < ApplicationController

  def create
    binding.pry
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to article_path(@comment.article_id)
    else
      redirect_to articles_path
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:commenter, :body, :article_id)
  end
end
