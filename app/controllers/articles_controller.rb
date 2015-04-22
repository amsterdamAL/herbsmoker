class ArticlesController < ApplicationController

#before_action :authenticate_user!, except: [:index, :show]


#CREATE = new,create
def new
  @article = Article.new
end

def create
  @article = Article.new(article_params)
  
  if @article.save
    redirect_to @article
  else
    render 'new'
  end
end



#READ = index,show
def index
  @articles = Article.search(params[:keyword]).order('created_at DESC')
end

def show
  @article = Article.find(params[:id])
end


#UPDATE
def edit
  @article = Article.find(params[:id])
end

def update
  @article = Article.find(params[:id])
  
  if @article.update(article_params)
    redirect_to @article
    
  else
    render 'edit'
  end
end



#DELETE

def destroy
  @article = Article.find(params[:id])
  @article.destroy
  
  redirect_to articles_path
end  

  


private
  def article_params
    params.require(:article).permit(:title, :text, :image)
  end

end
