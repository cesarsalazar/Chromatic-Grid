#app.rb

require 'rubygems'
require 'sinatra'
require 'haml'

get '/' do
  @title = 'Estructuras de colores  |  La obra de Fernando Salazar'
  haml :index

end

get '/gallery' do
  @title = 'Galería  |  Estructuras de colores'
  haml :gallery
end

get '/global.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :global
end

