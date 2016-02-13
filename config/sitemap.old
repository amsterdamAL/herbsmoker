require 'rubygems'
require 'sitemap_generator'
require 'fog/aws'
#require 'fog'
#
SitemapGenerator::Sitemap.default_host = 'http://agile-stream-2304.herokuapp.com'


# Set the host name for URL creation
#SitemapGenerator::Sitemap.default_host = "http://www.oridatoker.com"

# pick a place safe to write the files
SitemapGenerator::Sitemap.public_path = 'tmp/'

# store on S3 using Fog
SitemapGenerator::Sitemap.adapter = SitemapGenerator::S3Adapter.new

# inform the map cross-linking where to find the other maps
SitemapGenerator::Sitemap.sitemaps_host = "http://#{ENV['FOG_DIRECTORY']}.s3.amazonaws.com/"

# pick a namespace within your bucket to organize your maps
SitemapGenerator::Sitemap.sitemaps_path = 'sitemaps/'

SitemapGenerator::Sitemap.create do
  add '/find', :changefreq => 'daily', :priority => 0.9
  add '/contact_us', :changefreq => 'weekly'
end
#SitemapGenerator::Sitemap.ping_search_engines # Not needed if you use the rake tasks