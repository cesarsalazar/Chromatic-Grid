#app.rb

require 'rubygems'
require 'sinatra'
require 'haml'
require 'json'
require 'sass'
require 'pony'

get '/' do
  @title = 'Estructuras de colores  |  La obra de Fernando Salazar'
  haml :index
end

get '/gallery' do
  @title = 'Galería  |  Estructuras de colores'
  haml :gallery
end

# Get params and receive email
get '/mail' do
  Pony.mail :to => 'cesar@42claps.com',
            :from => 'i.am@cesarsalazar.mx',
            :subject => 'Howdy, Partna!'
end

get '/global.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :global
end



