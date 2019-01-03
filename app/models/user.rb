# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :add_friend, Array

  def self.add_friend(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id IN (?)", ids)
  end

  def self.friend(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id NOT IN (?)", ids).order("RANDOM()")
  end
end
