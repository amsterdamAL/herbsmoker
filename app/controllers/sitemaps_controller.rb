class SitemapsController < ApplicationController

def show
    # Redirect to CloudFront and S3
    redirect_to "http://s3.amazonaws.com/tokerbucket/sitemaps/sitemap.xml.gz"
  end



end
